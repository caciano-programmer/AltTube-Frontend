# AlttubeFrontend
 This is the front-end of a video hosting and sharing applicaion. Sort of like a bare bones version of youtube, you can: upload videos, create and edit your account so other can know more about you, leave comments on videos, etc. Also each video has a live chat feature built on web sockets that allows communication in real time.
 
 To view the back-end portion visit this repo:
  https://github.com/caciano-programmer/AltTube-Backend
 
 # How To Run
  The easiest way to run this project is through docker. Docker is a useful tool for running applications inside containers.
  If you are unfamiliar with docker or you wish to install docker visit this link: https://www.docker.com/get-started
  
  Once you have docker installed you can run this application with the following commands:
    `docker build -t AltTube-Frontend https://github.com/caciano-programmer/AltTube-Frontend.git`
    `docker run -p 4200:4200 AltTube-Frontend`
  
  Once these commands have finished visit localhost on your machine on port 4200, the following link: http://127.0.0.1:4200
