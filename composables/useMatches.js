import matches from "@/data/matchs.json"
import { useTeams } from "./useTeams"
export const useMatches = () => {
    const teams = useTeams()
    return matches.map(element => {
        if (element.type === "match")
            return {
                ...element,
                'team1': teams[element.team1Id],
                'team2': teams[element.team2Id],
                'startAt': new Date(element.startAt[0], element.startAt[1], element.startAt[2])
            }
        else
            return {
                ...element,
                'startAt': new Date(element.startAt[0], element.startAt[1], element.startAt[2])
            }
    });
}