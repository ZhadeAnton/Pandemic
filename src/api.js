import { db } from './firebase.config';

export function fetchAnnounces() {
  return db.collection('announces')
      .get()
      .then((res) => res.docs.map((doc) => ({
        ...doc.data()
      })))
}

export function fetchLatestMatches() {
  return db.collection('latest-matches')
      .get()
      .then((res) => res.docs.map((doc) => ({
        ...doc.data()
      })))
      .then((res) => {
        const matchesList = res.map(async (match) => {
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
      })
}
