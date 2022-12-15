import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notifications';

type OverrideProps = Partial<NotificationProps>;

export function makeNotification(override: OverrideProps = {}) {
  return new Notification({
    category: 'Social',
    content: new Content('Nova solicitação de amizade!'),
    recipientId: 'recipient-1',
    ...override,
  });
}
