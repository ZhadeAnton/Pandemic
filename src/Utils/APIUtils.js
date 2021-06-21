export function mapDocsWithId(snapShot) {
  return snapShot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }))
}

export function mapDocs(snapShot) {
  return snapShot.docs.map((doc) => ({
    ...doc.data()
  }))
}

export function getDocWithId(doc) {
  return doc.get().then((res) => ({
    id: res.id,
    ...res.data()
  }))
}

export function awaitMatchWithReferences(match) {
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

export async function awaitPlayers(parsedTeam) {
  const promises = []
  parsedTeam.players.map((player) => {
    promises.push(getDocWithId(player))
  })

  await Promise.all(promises).then((parsedPlayers) => {
    parsedTeam.players = parsedPlayers
  })

  return parsedTeam
}

export function awaitPlayersOfTeam(team) {
  return getDocWithId(team)
      .then(awaitPlayers)
}
