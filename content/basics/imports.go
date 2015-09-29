// +build OMIT

package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Printf("Сада имате %g проблема.", math.Nextafter(2, 3))
}
