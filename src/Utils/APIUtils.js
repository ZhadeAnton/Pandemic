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

export function getDocWithQuantity(doc, quantity) {
  return doc.get().then((res) => ({
    id: res.id,
    quantity: quantity,
    ...res.data()
  }))
}

export function getDoc(doc) {
  return doc.get().then((res) => ({
    ...res.data()
  }))
}

export async function getReferencesFromCart(array) {
  const promises = []
  array.map((cartItem) => {
    promises.push(getDocWithQuantity(cartItem.item, cartItem.quantity))
  })

  await Promise.all(promises).then((parsedItems) => {
    array = parsedItems
  })

  return array
}

export async function getReferences(array) {
  const promises = []
  array.map((item) => {
    promises.push(getDocWithQuantity(item, item.quantity))
  })

  await Promise.all(promises).then((parsedItems) => {
    array = parsedItems
  })

  return array
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

async function awaitPlayers(parsedTeam) {
  parsedTeam.players = await getReferences(parsedTeam.players)
  return parsedTeam
}

function awaitPlayersOfTeam(team) {
  return getDocWithId(team)
      .then(awaitPlayers)
}
