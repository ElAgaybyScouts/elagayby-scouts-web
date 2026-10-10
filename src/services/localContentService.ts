import { contactMethods, events, faqItems, pillars, programs } from '../data/siteData'

export const localContentService = {
  getPillars: () => pillars,
  getPrograms: () => programs,
  getEvents: () => events,
  getFaqItems: () => faqItems,
  getContactMethods: () => contactMethods,
}
