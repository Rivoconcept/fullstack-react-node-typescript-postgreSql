// src/state/cardGameAtoms.ts
import { atom } from "jotai"

export type Phase = "BEGIN" | "SHUFFLE" | "PLAY" | "WAITING" | "RESULT";

export type GamePhase = "BEGIN" | "SHUFFLE" | "PLAY" | "WAITING" | "RESULT";

export const phaseAtom = atom<GamePhase>("BEGIN");


export const turnAtom = atom(0)
export const scoresAtom = atom<number[]>([])

export const totalScoreAtom = atom((get) =>
  get(scoresAtom).reduce((a, b) => a + b, 0)
)

export const isWinAtom = atom((get) => get(totalScoreAtom) >= 27)
export const isLoseAtom = atom((get) => get(turnAtom) >= 5)

export const setPhaseAtom = atom(
  null,
  (_get, set, phase: GamePhase) => {
    set(phaseAtom, phase)
  }
)
