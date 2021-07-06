import { db } from '../Firebase/firebase.config';
import { IFnGetMatchesByDiscipline } from '../Interfaces/MatchInterfaces';
import {
  mapDocsWithId,
  mapDocs,
  awaitMatchWithReferences
} from '../Utils/APIUtils'

export function getAnnounces() {
  return db.collection('announces')
      .get()
      .then(mapDocsWithId)
}

export function getListOfDiscipines() {
  return db.collection('disciplines')
      .get()
      .then(mapDocs)
      .then((res) => {
        const listOfDisciplines = [...res[0].list]

        return [...listOfDisciplines]
      })
}

export const getMatchesByDiscipline: IFnGetMatchesByDiscipline = (discipline) => {
  return db.collection('latest-matches')
      .where('discipline', '==', `${discipline}`)
      .get()
      .then(mapDocsWithId)
      .then(awaitMatchWithReferences)
}
