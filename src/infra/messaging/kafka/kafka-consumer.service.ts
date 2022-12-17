import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['flowing-rodent-6919-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'Zmxvd2luZy1yb2RlbnQtNjkxOSSnTva21RxeGe4ldujg7ClOLDUi4iC-5OkC-c0',
          password:
            '0UPMLJcm2aNHtF6ql75NhpU6OGqlVaIWqbotJjNNZJpJ-ao0ZJ-ztvP3VFVU8OlTURQYwA==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
