import {BehaviorSubject, ReplaySubject, Subject} from "rxjs";


document.addEventListener('click', () => {

    const stream$ = new ReplaySubject(2)

    stream$.next('Hello')
    stream$.next('RX')
    stream$.next('JS')

    stream$.subscribe(v => console.log('value: ', v))
})