import { useQuery } from "@tanstack/react-query";
import { getHeroAction } from "../actions/get-hero.action";

export const useHeroInformation = (idSlug: string) => {
  return useQuery({
    queryKey: ["hero-information"],
    queryFn: () => getHeroAction(idSlug),
    retry: false,
  });
};
