import {interval, range, timer} from 'rxjs'

// const stream$ = of(1, 2, 3, 4)
//
// stream$.subscribe(value => {
//     console.log(value)
// })

// const arr_stream$ = from([1,2,3,4]).pipe(
//     scan((acc,v) => acc.concat(v), [])
// )
//
// arr_stream$.subscribe(val => console.log(val))

// const stream$ = new Observable(observer => {
//
//     observer.next('First value')
//
//     setTimeout(() => observer.next('After 1000 ms'), 1000)
//
//     setTimeout(() => observer.next('Complete 1500 ms'), 1500)
//
//     setTimeout(() => observer.error('Something went wrong'), 2000)
//
//     setTimeout(() => observer.next('After 3s'), 3000)
//
// })

// stream$.subscribe(
//     val => console.log("Val:", val),
//     err => console.log("Err:", err),
//     () => console.log("Complete")
// )

// stream$.subscribe({
//     next(val) {
//         console.log("val", val)
//     },
//     error(err) {
//         console.log("err", err)
//     },
//     complete() {
//         console.log("complete")
//     }
// })stream$.subscribe({
//     next(val) {
//         console.log("val", val)
//     },
//     error(err) {
//         console.log("err", err)
//     },
//     complete() {
//         console.log("complete")
//     }
// })

// fromEvent(document.querySelector('canvas'), 'mousemove')
//     .pipe(
//         map(e => ({
//             x: e.offsetX,
//             y: e.offsetY,
//             ctx: e.target.getContext('2d'),
//         }))
//     )
//     .subscribe(pos => {
//         console.log("EVENT:", pos.ctx.fillRect(pos.x, pos.y, 2,2))
//     })
//
// const clear$ = fromEvent(document.getElementById('clear'), 'click')
//
// clear$.subscribe(() => {
//     const canvas = document.querySelector('canvas')
//     canvas.getContext('2d').clearRect(0,0, canvas.width, canvas.height)
// })

// const sub$ = interval(500).subscribe(v =>console.log(v))
//
// setTimeout(() => {
//     sub$.unsubscribe()
// }, 4000)

// timer(2500).subscribe(v => console.log(v))

// range(42, 10).subscribe(v => console.log(v))