import { createServer } from 'http';
import Stream from 'node-rtsp-stream'
import onvif from 'node-onvif'


process.camera = [];
onvif.startProbe().then(() => {

    const stream = new Stream({
        name: 'naaaaame',
        streamUrl: 'rtsp://niv:niv@42.119.25.149:9111/streaming/channels/b0_e7_de_1b_77_4b-1584269084619-00000A30-0000-4000-A300-000000640000',
        wsPort: 9000
    })

    console.log("URL : ws://localhost:9000");
            
}).catch((error) => {
  console.error('errorerror', error);
});

createServer((req, res) => {
  res.write('Hello World!');
  res.end();
}).listen(process.env.PORT);
