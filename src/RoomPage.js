import React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

const RoomPage = () => {
    const {roomId}=useParams()
    let myMeeting = async (element) => {
         // generate Kit Token
 const appID =581899637 ;
 const serverSecret = "1e7a4c9bfe7a94abc643d87f306cf6e7";
 const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,'shaharia',Date.now().toString());
 // Create instance object from Kit Token.
 const zp = ZegoUIKitPrebuilt.create(kitToken);
 zp.joinRoom({
    container: element,
    sharedLinks: [
      {
        name: 'Personal link',
        url:
         window.location.protocol + '//' + 
         window.location.host + window.location.pathname +
          '?roomID=' +
          roomId,
      },
    ],
    scenario: {
     mode: ZegoUIKitPrebuilt.VideoConference,
    },
});
    }
    return (
        <div>
            <h1>This is Room</h1>
            <div ref={myMeeting }/>
        </div>
    );
};

export default RoomPage;