const apiUrl = import.meta.env.VITE_API_BASE_URL;

export enum EventType {
  OPEN_PAGE = "OPEN_PAGE",
  HOVER_PROFILE_IMAGE = "HOVER_PROFILE_IMAGE",
  HOVER_LINKEDIN_LINK = "HOVER_LINKEDIN_LINK",
  HOVER_GMAIL_LINK = "HOVER_GMAIL_LINK",
  CLICK_LINKEDIN_LINK = "CLICK_LINKEDIN_LINK",
  CLICK_GMAIL_LINK = "CLICK_GMAIL_LINK"
}

export async function submitEventData(eventType: EventType) {
  fetch(apiUrl + '/event', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      event_type: eventType, // will be sent as string
    }),
  });
}