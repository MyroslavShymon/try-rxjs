import {filter, fromEvent, interval, map, reduce, scan, switchMap, take, takeLast, takeWhile, tap} from "rxjs";

fromEvent(document, 'click')
    .pipe(
        switchMap(event => {
            return interval(1000)
                .pipe(
                    tap(v => console.log("Tap: ", v)),
                    take(5),
                    reduce((acc,v) => acc + v, 0)
                )
        })
    )
    .subscribe({
        next: v => console.log("Next: ", v),
        complete: () => console.log("Complete")
    })

// const stream$ = interval(1000)
//     .pipe(
//         // tap(v => console.log("V: ", v)),
//         // map((v) => v * 3),
//         // filter(v => v % 2 === 0),
//         take(5),
//         // take(10),
//         // takeLast(5)
//         // takeWhile(v => v <= 7)
//         // scan((acc, v) => acc + v, 0)
//         reduce((acc, v) => acc + v, 0)
//     )
//
// stream$.subscribe({
//     next: value => console.log("Next: ", value),
//     complete: () => console.log("Complete")
// })