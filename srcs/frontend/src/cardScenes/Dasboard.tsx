import { useAtom } from "jotai"

import ProgressCircleTimer from "../components/cards/ProgressCircleTimer"
import { ProgressBar } from "../components/cards/ProgressBarScore"
import ScoreList from "../components/cards/ScoreList"
import PhaseButton from "../components/ui/PhaseButton"
import { emitPlayTurn } from "../socket/cardGame.socket"
import { phaseAtom, setPhaseAtom, scoresAtom, totalScoreAtom, turnAtom, isWinAtom, isLoseAtom } from "../state/cardGameAtome"

export default function CardGameDashboard() {
  const [phase] = useAtom(phaseAtom)
  const [, setPhase] = useAtom(setPhaseAtom)
  const [scores] = useAtom(scoresAtom)
  const [totalScore] = useAtom(totalScoreAtom)
  const [turn] = useAtom(turnAtom)
  const [isWin] = useAtom(isWinAtom)
  const [isLose] = useAtom(isLoseAtom)


const onButtonClick = () => {
  switch (phase) {
    case "BEGIN":
      setPhase("SHUFFLE")
      break

    case "SHUFFLE":
      // 🔥 ACTION ACTIVE
      emitPlayTurn()     // ou playTurn()
      setPhase("PLAY")
      break

    case "PLAY":
      setPhase("RESULT")
      break

    case "RESULT":
      setPhase("BEGIN")
      break
  }
}

  return (
    <div className="dashboard">
      <div className="card-group">
        <div className="card border-0 bg-black text-light">
          <div className="card-body">
            <div className="avatar">
              <img src="/avatar.png" alt="avatar" />
            </div>
          </div>
        </div>
        <div className="card border-0 bg-black text-light">
          <div className="card-body">
            <div className="circleTimer">
              <ProgressCircleTimer />
            </div>
          </div>
        </div>
      </div>

      <hr className="separator"/>

      <div className="progressBarScore">
        <div className="progressTile">
          <span className="label">PROGRESS</span>
          <span className="turn">{turn} / 5</span>
        </div>
        <ProgressBar />
      </div>

      <div className="card-group">
        <div className="card border-0 bg-black text-light">
          <div className="card-body">
            <ul className="scoreLists">
              {scores.map((s, i) => (
                <ScoreList key={i} score={s} round={i + 1} />
              ))}
            </ul>
            <div className="separatorLine" />
            <div className="totalScore">
              <p>Score <span>{totalScore}</span></p>
            </div>
          </div>
        </div>
        <div className="card border-0 bg-black text-light">
          <div className="card-body">
            {isWin && <><h2 className="win">🎉 </h2> <h2 className="win">You Win!</h2></>}
            {isLose && !isWin && <> <span className="lose">💀</span> <span className="lose">Perdu</span></>}
          </div>
        </div>
      </div>

      <div className="separatorBottom">
        <hr className="separator"/>
      </div>

      <div className="cardButton">
        <PhaseButton phase={phase} onClick={onButtonClick} />
      </div>
    </div>
  )
}
