import { db } from './firebase.config';

export function fetchAnnounces() {
  return db.collection('announces')
      .get()
      .then(mapDocsWithId)
}

export function fetchListOfDiscipines() {
  return db.collection('disciplines')
      .get()
      .then(mapDocsWithId)
      .then((res) => {
        const list = []
        res.forEach((item) => {
          list.push(item.list)
        })

        return list[0]
      })
}

export function fetchMatchesByDiscipline(discipline) {
  return db.collection('latest-matches')
      .where('discipline', '==', `${discipline}`)
      .get()
      .then(mapDocsWithId)
      .then(awaitMatchWithReferences)
}

export function fetchTeammatesByTag(tag) {
  return db.collection('teams')
      .where('tag', '==', `${tag}`)
      .get()
      .then(mapDocsWithId)
      .then((res) => awaitPlayers(res[0]))
}

function mapDocsWithId(snapShot) {
  return snapShot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }))
}

function getDocWithId(doc) {
  return doc.get().then((res) => ({
    id: res.id,
    ...res.data()
  }))
}

function awaitMatchWithReferences(match) {
  const matchesList = match.map(async (match) => {
    const promises = []
    promises.push(awaitPlayersOfTeam(match.team1))
    promises.push(awaitPlayersOfTeam(match.team2))

    await Promise.all(promises).then((teamData) => {
      match.team1 = teamData[0]
      match.team2 = teamData[1]
      match.id = match.id
    })

    return match
  })

  return Promise.all(matchesList)
}

async function awaitPlayers(parsedTeam) {
  const promises = []
  parsedTeam.players.map((player) => {
    promises.push(getDocWithId(player))
  })

  await Promise.all(promises).then((parsedPlayers) => {
    parsedTeam.players = parsedPlayers
  })

  return parsedTeam
}

function awaitPlayersOfTeam(team) {
  return getDocWithId(team)
      .then(awaitPlayers)
}
