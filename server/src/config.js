// Config file for mediasoup elements

const os = require('os');

module.exports = Object.freeze({
  numWorkers: Object.keys(os.cpus()).length,
  worker: {
    logLevel: 'debug',
    logTags: [
      'rtp',
      'srtp',
      'rtcp',
    ],
    rtcMinPort: 40000,
    rtcMaxPort: 49999
  },
  router: {
    mediaCodecs: [
      {
        kind: 'audio',
        mimeType: 'audio/opus',
        clockRate: 48000,
        channels: 2
      },
      {
        kind: 'video',
        mimeType: 'video/VP8',
        clockRate: 90000
      },
    ]
  },
  webRtcTransport: {
  listenIps: [ { ip: '157.119.251.231' }],
    enableUdp: true,
    enableTcp: true,
    preferUdp: true,
    maxIncomingBitrate: 1500000
  },
  plainRtpTransport: {
    listenIp: '127.0.0.1',
    rtcpMux: true,
    comedia: false 
  }
});
