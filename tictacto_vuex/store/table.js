import Vue from 'vue';
/**
 * Computed property names (= object dynamic key)
 * : Object에 [] 연산자를 통해, 계산된 속성으로 쓸수 있다.
 * -> ex)
 * const SET_WINNER = 'winner';
 * function [SET_WINNER](state,winner){
 *      state.winner = winner;
 * },
 * 
 */

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';
export const NO_WINNER = 'NO_WINNER';
export const GET_TABLE = 'GET_TABLE';

export default {
    /**
     * vue - data
     */
    state : {
        tableData : [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ],
        turn : 'O',
        tableArr : ['','',''],
        winner : '',
    },
    /**
     *  vue - computed  
     * */ 
    getters : {
        
    },
    /**
     * state를 동기적으로 수정 할때
     * 왜 state를 바로 바꾸지 않고, mutation을 통해서 바꾸는가
     */
    mutations: {
        [SET_WINNER](state,winner){
            state.winner = winner;
        },
        [CLICK_CELL](state,{row,cell}){
            Vue.set(state.tableData[row],cell,state.turn);
        },
        [CHANGE_TURN](state){
            state.turn = state.turn === 'O' ? 'X' : 'O';
        },
        [RESET_GAME](state){
            state.turn = 'O';
            state.tableData = [
                ['','',''],
                ['','',''],
                ['','',''] 
            ]
        },
        [NO_WINNER](state){
            state.winner = '';
        }
    },
    /**
     * 비동기를 사용할때, 또는 여러 mutations을 연달아 실행할때
     */
    actions : {},
    
}