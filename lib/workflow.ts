import { Client as WorkflowClient } from '@upstash/workflow';
import { Client as QStashCleint, resend } from '@upstash/qstash';
import config from '@/lib/config';

export const workflowClient = new WorkflowClient({
  baseUrl: config.env.upstash.qstashUrl,
  token: config.env.upstash.qstashToken,
});

const qstashClient = new QStashCleint({ token: config.env.upstash.qstashToken });

export const sendEmail = async ({
  email,
  subject,
  message,
}: {
  email: string;
  subject: string;
  message: string;
}) => {
  await qstashClient.publishJSON({
    api: {
      name: 'email',
      provider: resend({ token: config.env.resendToken }),
    },
    body: {
      from: 'CincinnatiDev <onboarding@cincinnatidev.com>',
      to: [email],
      subject,
      html: message,
    },
  });
};
