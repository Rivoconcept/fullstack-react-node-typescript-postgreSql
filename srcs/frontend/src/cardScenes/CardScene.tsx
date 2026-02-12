import { Canvas } from "@react-three/fiber"
import ShuffleCard from "../components/cards/ShuffleCard"
import RevealCard from "../components/cards/RevealCard"
import BackCard from "./CardBack"
import { useCardState } from "../context/cardGame/CardContext"
import { useAtom } from "jotai"
import { phaseAtom } from "../state/cardGameAtome"
import CardGameDashboard from "./Dasboard"

export default function CardScene() {
  const { cards } = useCardState()
  const [phase] = useAtom(phaseAtom)

  return (
    <div className="cardScene">
      <div className="cardsRow">
        {[0, 1, 2].map(i => (
          <div key={i} className="cardSlot">
            <Canvas camera={{ position: [0, 1.5, 5] }} className="cardCanvas">
              <ambientLight intensity={0.8} />
              <directionalLight position={[5, 5, 5]} />
              {phase === "BEGIN" && <BackCard />}
              {phase === "SHUFFLE" && <ShuffleCard />}
              {phase === "PLAY" && cards?.[i] && <RevealCard key={`reveal-${cards[i].id}`} cardId={cards[i].id} />}
            </Canvas>
          </div>
        ))}
        <CardGameDashboard />
      </div>
    </div>
  )
}
