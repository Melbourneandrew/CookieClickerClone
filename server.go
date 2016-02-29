package main

import (
    "github.com/codegangsta/negroni"
    "github.com/julienschmidt/httprouter"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
)

func main() {

	ip := os.Getenv("IP")
	port := os.Getenv("PORT")

	router := httprouter.New()
	router.GET("/", serveIndex)

	router.HandleMethodNotAllowed = false
	router.NotFound = http.FileServer(http.Dir("."))

	n := negroni.Classic()
	n.UseHandler(router)

	defer n.Run(ip + ":" + port)
}


func serveIndex(res http.ResponseWriter, req *http.Request, _ httprouter.Params) {
	res.Header().Set("Content-type", "text/html")

	webpage, err := ioutil.ReadFile("index.html")
	if err != nil {
		http.Error(res, fmt.Sprintf("home.html file error %v", err), 500)
	}
	fmt.Fprint(res, string(webpage))
}