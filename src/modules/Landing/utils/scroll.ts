import { scroller } from "react-scroll";

export const NAV_OFFSET = -90;

export function scrollToId(id: string) {
  scroller.scrollTo(id, {
    smooth: true,
    duration: 600,
    offset: NAV_OFFSET,
  });
}
