import accessTime from './svgs/access_time.svg'
import add from './svgs/add.svg'
import addCircle from './svgs/add_circle.svg'
import addCircleOutline from './svgs/add_circle_outline.svg'
import analytics from './svgs/analytics.svg'
import arrowUpward from './svgs/arrow_upward.svg'
import article from './svgs/article.svg'
import block from './svgs/block.svg'
import calculator from './svgs/calculator.svg'
import calendarToday from './svgs/calendar_today.svg'
import cancelFill from './svgs/cancel_fill.svg'
import check2 from './svgs/check2.svg'
import chevronRight from './svgs/chevron_right.svg'
import coporateFare from './svgs/coporate_fare.svg'
import creditCard from './svgs/credit_card.svg'
import deleteIcon from './svgs/delete.svg'
import download from './svgs/download.svg'
import exitToApp from './svgs/exit_to_app.svg'
import filterAlt from './svgs/filter_alt.svg'
import helpFill from './svgs/help_fill.svg'
import language from './svgs/language.svg'
import lock from './svgs/lock.svg'
import lockOpen from './svgs/lock_open.svg'
import memory from './svgs/memory.svg'
import menu from './svgs/menu.svg'
import notificationsNone from './svgs/notifications_none.svg'
import personOutline from './svgs/person_outline.svg'
import property from './svgs/property.svg'
import questionMark from './svgs/question_mark.svg'
import removeCircleOutline from './svgs/remove_circle_outline.svg'
import search from './svgs/search.svg'
import settings from './svgs/settings.svg'
import syncAlt from './svgs/sync_alt.svg'
import syncAltVertical from './svgs/sync_alt_vertical.svg'
import trendingUp from './svgs/trending_up.svg'
import visibleOff from './svgs/visible_off.svg'
import visibleOn from './svgs/visible_on.svg'
import widgets from './svgs/widgets.svg'

export const icons = {
  add,
  block,
  filterAlt,
  calculator,
  calendarToday,
  questionMark,
  syncAltVertical,
  syncAlt,
  visibleOff,
  visibleOn,
  addCircleOutline,
  removeCircleOutline,
  search,
  exitToApp,
  cancelFill,
  article,
  coporateFare,
  personOutline,
  property,
  creditCard,
  lock,
  lockOpen,
  check2,
  addCircle,
  settings,
  deleteIcon,
  download,
  helpFill,
  arrowUpward,
  language,
  accessTime,
  memory,
  chevronRight,
  notificationsNone,
  widgets,
  trendingUp,
  analytics,
  menu,
} as const

export type IconType = keyof typeof icons
export const iconTypes: IconType[] = Object.keys(icons) as IconType[]

export const isIconType = (icon?: string): icon is IconType => {
  if (!icon) {
    return false
  }

  for (const i of iconTypes) {
    if (i === icon) {
      return true
    }
  }

  return false
}
