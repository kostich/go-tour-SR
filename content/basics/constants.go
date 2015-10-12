// +build OMIT

package main

import "fmt"

const Pi = 3.14

func main() {
	const World = "свете"
	fmt.Println("Hello", World)
	fmt.Println("Срећан", Pi, "дан")

	const Truth = true
	fmt.Println("Го је закон?", Truth)
}
