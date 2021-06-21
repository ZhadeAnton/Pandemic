import { db } from '../../Firebase/firebase.config';
import {
  mapDocsWithId,
  awaitMatchWithReferences
} from '../../Utils/APIUtils'

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
