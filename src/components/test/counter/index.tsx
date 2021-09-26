import React, {useState} from 'react';

import {useStoreDispatch, useStoreSelector} from '@/store/hooks';
import {decrement, increment, incrementAsync, incrementByAmount, incrementIfOdd, selectCount,} from './counterSlice';
import styles from './Counter.module.scss';
import {AnyAction} from "redux";

export function Counter() {
    const count = useStoreSelector(selectCount);
    const dispatch = useStoreDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    const incrementValue = Number(incrementAmount) || 0;

    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
                <span className={styles.value}>{count}</span>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button
                    className={styles.button}
                    onClick={() => dispatch(incrementByAmount(incrementValue))}
                >
                    Add Amount
                </button>
                <button
                    className={styles.asyncButton}
                    onClick={() => dispatch(incrementAsync(incrementValue) as unknown as AnyAction)}
                >
                    Add Async
                </button>
                <button
                    className={styles.button}
                    onClick={() => dispatch(incrementIfOdd(incrementValue) as unknown as AnyAction)}
                >
                    Add If Odd
                </button>
            </div>
        </div>
    );
}
