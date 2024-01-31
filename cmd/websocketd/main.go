package main

import (
	"io"
	"net/http"

	"golang.org/x/net/websocket"
)

func EchoServer(ws *websocket.Conn) {
	io.Copy(ws, ws)
}

func main() {
	http.Handle("/ws/echo", websocket.Handler(EchoServer))
	if err := http.ListenAndServe(":8082", nil); err != nil {
		panic(err)
	}
}
