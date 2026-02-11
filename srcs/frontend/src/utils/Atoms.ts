import { atom } from "jotai";
import  ky from "ky"

export const compteurAtom = atom(0)
export const doubledCompteurAtom = atom((get) => get(compteurAtom) * 2)


type User = {
  id: number
  name: string
  email: string
}

export const usersAtom = atom(async (_get, { signal }) => {
  return ky
    .get("https://jsonplaceholder.typicode.com/users/1", { signal })
    .json<User>()
})
