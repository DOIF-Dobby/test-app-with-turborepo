import accessTime from './svgs/access_time.svg'
import accountBalanceFill from './svgs/account_balance_fill.svg'
import accountCircle from './svgs/account_circle.svg'
import add from './svgs/add.svg'
import addCircle from './svgs/add_circle.svg'
import addCircleFill from './svgs/add_circle_fill.svg'
import addCircleOutline from './svgs/add_circle_outline.svg'
import analytics from './svgs/analytics.svg'
import arrowBack from './svgs/arrow_back.svg'
import arrowDownward from './svgs/arrow_downward.svg'
import arrowForwardIos from './svgs/arrow_forward_ios.svg'
import arrowUpward from './svgs/arrow_upward.svg'
import article from './svgs/article.svg'
import asteriskFill from './svgs/asterisk_fill.svg'
import block from './svgs/block.svg'
import calculator from './svgs/calculator.svg'
import calendarToday from './svgs/calendar_today.svg'
import calendarTodayFill from './svgs/calendar_today_fill.svg'
import cancelFill from './svgs/cancel_fill.svg'
import check from './svgs/check.svg'
import check2 from './svgs/check2.svg'
import chevronRight from './svgs/chevron_right.svg'
import close from './svgs/close.svg'
import corporateFare from './svgs/corporate_fare.svg'
import creditCard from './svgs/credit_card.svg'
import currency from './svgs/currency.svg'
import currencyKrw from './svgs/currency_krw.svg'
import dashboard from './svgs/dashboard.svg'
import deleteIcon from './svgs/delete.svg'
import deposit from './svgs/deposit.svg'
import download from './svgs/download.svg'
import error from './svgs/error.svg'
import errorFill from './svgs/error_fill.svg'
import errorOutline from './svgs/error_outline.svg'
import exchange from './svgs/exchange.svg'
import exitToApp from './svgs/exit_to_app.svg'
import expandMore from './svgs/expand_more.svg'
import filterAlt from './svgs/filter_alt.svg'
import formListBulleted from './svgs/form_list_bulleted.svg'
import grid from './svgs/grid.svg'
import help from './svgs/help.svg'
import helpFill from './svgs/help_fill.svg'
import infoFillWhiteBg from './svgs/info_fill_whitebg.svg'
import insertDriveFile from './svgs/insert_drive_file.svg'
import language from './svgs/language.svg'
import lock from './svgs/lock.svg'
import lockOpen from './svgs/lock_open.svg'
import mailOutline from './svgs/mail_outline.svg'
import member from './svgs/member.svg'
import memory from './svgs/memory.svg'
import menu from './svgs/menu.svg'
import moreHoriz from './svgs/more_horiz.svg'
import moreVert from './svgs/more_vert.svg'
import notificationsNone from './svgs/notifications_none.svg'
import openInNew from './svgs/open_in_new.svg'
import organization from './svgs/organization.svg'
import personOutline from './svgs/person_outline.svg'
import plan from './svgs/plan.svg'
import property from './svgs/property.svg'
import questionMark from './svgs/question_mark.svg'
import refresh from './svgs/refresh.svg'
import remove from './svgs/remove.svg'
import removeCircle from './svgs/remove_circle.svg'
import removeCircleOutline from './svgs/remove_circle_outline.svg'
import search from './svgs/search.svg'
import settings from './svgs/settings.svg'
import syncAlt from './svgs/sync_alt.svg'
import syncAltVertical from './svgs/sync_alt_vertical.svg'
import trendingUp from './svgs/trending_up.svg'
import visibleOff from './svgs/visible_off.svg'
import visibleOn from './svgs/visible_on.svg'
import warningFill from './svgs/warning_fill.svg'
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
  corporateFare,
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
  openInNew,
  dashboard,
  arrowBack,
  warningFill,
  accountCircle,
  currency,
  organization,
  member,
  plan,
  arrowForwardIos,
  mailOutline,
  moreHoriz,
  moreVert,
  exchange,
  asteriskFill,
  addCircleFill,
  removeCircle,
  close,
  infoFillWhiteBg,
  insertDriveFile,
  check,
  error,
  errorOutline,
  expandMore,
  help,
  refresh,
  remove,
  currencyKrw,
  errorFill,
  accountBalanceFill,
  deposit,
  arrowDownward,
  calendarTodayFill,
  formListBulleted,
  grid,
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
