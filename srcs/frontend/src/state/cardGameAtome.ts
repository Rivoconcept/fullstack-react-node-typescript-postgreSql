import { atom } from "jotai"

export type GamePhase = "BEGIN" | "SHUFFLE" | "PLAY"

export const phaseAtom = atom<GamePhase>("BEGIN")

export const turnAtom = atom(0)
export const maxTurnsAtom = atom(5)

export const scoresAtom = atom<number[]>([])

export const totalScoreAtom = atom(
  (get) => get(scoresAtom).reduce((a, b) => a + b, 0)
)

export const gameResultAtom = atom<"idle" | "win" | "lose">("idle")
