const { Kafka } = require("kafkajs");

const topic = process.argv[2];
const message = process.argv[3];

if (!topic || !message) {
    console.log("Usage: node main.js topic message")
    process.exit(0);
}

// kafka
const kafka = new Kafka({
  clientId: "test",
  brokers: ["127.0.0.1:9092"],
});
const producer = kafka.producer();

(async () => {
    await producer.connect();
    await producer.send({
        topic: topic,
        messages: [{ key: "log", value: message }],
      });

    process.exit(0);
})();
