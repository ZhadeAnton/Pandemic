import React from 'react'

import './matchItem.scss'
import useSelectMatch from '../../../Hooks/MatchItemHooks';
import { IMatch } from '../../../Interfaces/MatchInterfaces';

import MatchItemTeam from '../MatchItemTeam/MatchItemTeam';
import MatchScore from '../MatchScore/MatchScore';
import MatchDate from '../MatchDate/MatchDate';

interface Props {
  match: IMatch,
}

function MatchItem(props: Props) {
  const useMatch = useSelectMatch()

  return (
    <div
      className='match-item'
      onClick={(e) => useMatch.handleSelectMatch(e, props.match)}
    >
      <div className='match-item__wrapper'>
        <MatchItemTeam
          team={props.match.team1}
          discipline={props.match.discipline}
          handleSelectTeam={useMatch.handleSelectTeam}
        />

        <MatchScore score={props.match.score}/>

        <MatchItemTeam
          team={props.match.team2}
          discipline={props.match.discipline}
          handleSelectTeam={useMatch.handleSelectTeam}
          reverse
        />
        <div className='match-item__back'></div>
      </div>

      <MatchDate date={props.match.date}/>
    </div>
  )
}

export default MatchItem
