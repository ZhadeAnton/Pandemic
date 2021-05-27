import { db } from './firebase.config';

export function fetchAnnounces() {
  return db.collection('announces')
      .get()
      .then(mapDoc)
}

export function fetchListOfDiscipines() {
  return db.collection('disciplines')
      .get()
      .then(mapDoc)
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
      .then(mapDoc)
      .then(awaitMatchWithReferences)
}

function mapDoc(snapShot) {
  return snapShot.docs.map((doc) => ({
    ...doc.data()
  }))
}

function awaitMatchWithReferences(match) {
  const matchesList = match.map(async (match) => {
    const promises = []
    promises.push(match.team1.get().then((res) => match.team1 = res.data()))
    promises.push(match.team2.get().then((res) => match.team2 = res.data()))

    await Promise.all(promises).then((teamData) => {
      match.team1 = teamData[0]
      match.team2 = teamData[1]
    })

    return match
  })

  return Promise.all(matchesList)
}
