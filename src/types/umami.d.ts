// Umami Analytics type definitions
interface Window {
  umami?: {
    track: (eventName: string, eventData?: Record<string, any>) => void;
  };
}
