let wasm;

const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

const cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );

if (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}
/**
* @returns {number}
*/
export function ground_pos() {
    const ret = wasm.ground_pos();
    return ret;
}

/**
* @returns {number}
*/
export function max_notes_per_screen_width() {
    const ret = wasm.max_notes_per_screen_width();
    return ret;
}

/**
* @returns {number}
*/
export function time_zero_brick_pos() {
    const ret = wasm.time_zero_brick_pos();
    return ret;
}

/**
* @returns {Position}
*/
export function game_dimensions() {
    const ret = wasm.game_dimensions();
    return Position.__wrap(ret);
}

/**
* @returns {Position}
*/
export function player_dimensions() {
    const ret = wasm.player_dimensions();
    return Position.__wrap(ret);
}

/**
* @returns {Position}
*/
export function brick_dimensions() {
    const ret = wasm.brick_dimensions();
    return Position.__wrap(ret);
}

/**
* @returns {number}
*/
export function num_possible_inputs() {
    const ret = wasm.num_possible_inputs();
    return ret >>> 0;
}

/**
* @param {GraphicGroup} g
* @returns {number}
*/
export function max_graphics(g) {
    const ret = wasm.max_graphics(g);
    return ret >>> 0;
}

/**
* @param {GraphicGroup} g
* @returns {Position}
*/
export function graphic_size(g) {
    const ret = wasm.graphic_size(g);
    return Position.__wrap(ret);
}

/**
* @returns {number}
*/
export function num_graphic_groups() {
    const ret = wasm.num_graphic_groups();
    return ret >>> 0;
}

let WASM_VECTOR_LEN = 0;

const cachedTextEncoder = (typeof TextEncoder !== 'undefined' ? new TextEncoder('utf-8') : { encode: () => { throw Error('TextEncoder not available') } } );

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachedInt32Memory0 = null;

function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}
/**
*/
export const GraphicFlags = Object.freeze({ HorizontalFlip:1,"1":"HorizontalFlip",VerticalFlip:2,"2":"VerticalFlip",Opacity:4,"4":"Opacity", });
/**
*/
export const Input = Object.freeze({ Dash:0,"0":"Dash",Slash1:1,"1":"Slash1",Slash2:2,"2":"Slash2",Slash3:3,"3":"Slash3", });
/**
*/
export const GraphicGroup = Object.freeze({ Background:0,"0":"Background",MissEffect:1,"1":"MissEffect",DashIndicator:2,"2":"DashIndicator",Standing:3,"3":"Standing",Walking:4,"4":"Walking",Running:5,"5":"Running",Stunned:6,"6":"Stunned",Slashing1:7,"7":"Slashing1",Slashing2:8,"8":"Slashing2",Slashing3:9,"9":"Slashing3",Brick1:10,"10":"Brick1",Brick2:11,"11":"Brick2",Brick3:12,"12":"Brick3",Brick1Segment:13,"13":"Brick1Segment",Brick2Segment:14,"14":"Brick2Segment",Brick3Segment:15,"15":"Brick3Segment",Dash0:16,"16":"Dash0",Dash1:17,"17":"Dash1",Dash2:18,"18":"Dash2",Dash3:19,"19":"Dash3",PreHolding1:20,"20":"PreHolding1",PreHolding2:21,"21":"PreHolding2",PreHolding3:22,"22":"PreHolding3",Holding1:23,"23":"Holding1",Holding2:24,"24":"Holding2",Holding3:25,"25":"Holding3",Hold1:26,"26":"Hold1",Hold2:27,"27":"Hold2",Hold3:28,"28":"Hold3", });
/**
*/
export const BrickType = Object.freeze({ Type1:0,"0":"Type1",Type2:1,"1":"Type2",Type3:2,"2":"Type3", });
/**
*/
export const SoundEffect = Object.freeze({ NoteHit:0,"0":"NoteHit",NoteSegmentHit:1,"1":"NoteSegmentHit", });

const AudioInstructionsFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_audioinstructions_free(ptr >>> 0));
/**
*/
export class AudioInstructions {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(AudioInstructions.prototype);
        obj.__wbg_ptr = ptr;
        AudioInstructionsFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        AudioInstructionsFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_audioinstructions_free(ptr);
    }
    /**
    * @returns {number}
    */
    get num_instructions() {
        const ret = wasm.__wbg_get_audioinstructions_num_instructions(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set num_instructions(arg0) {
        wasm.__wbg_set_audioinstructions_num_instructions(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get instructions_ptr() {
        const ret = wasm.__wbg_get_audioinstructions_instructions_ptr(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set instructions_ptr(arg0) {
        wasm.__wbg_set_audioinstructions_instructions_ptr(this.__wbg_ptr, arg0);
    }
}

const BrickDataFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_brickdata_free(ptr >>> 0));
/**
*/
export class BrickData {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(BrickData.prototype);
        obj.__wbg_ptr = ptr;
        BrickDataFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        BrickDataFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_brickdata_free(ptr);
    }
    /**
    * @returns {BrickType}
    */
    get brick_type() {
        const ret = wasm.__wbg_get_brickdata_brick_type(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {BrickType} arg0
    */
    set brick_type(arg0) {
        wasm.__wbg_set_brickdata_brick_type(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get beat_pos() {
        const ret = wasm.__wbg_get_brickdata_beat_pos(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set beat_pos(arg0) {
        wasm.__wbg_set_audioinstructions_num_instructions(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get end_beat_pos() {
        const ret = wasm.__wbg_get_brickdata_end_beat_pos(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set end_beat_pos(arg0) {
        wasm.__wbg_set_brickdata_end_beat_pos(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get x_pos() {
        const ret = wasm.__wbg_get_brickdata_x_pos(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set x_pos(arg0) {
        wasm.__wbg_set_brickdata_x_pos(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {boolean}
    */
    get is_triplet() {
        const ret = wasm.__wbg_get_brickdata_is_triplet(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
    * @param {boolean} arg0
    */
    set is_triplet(arg0) {
        wasm.__wbg_set_brickdata_is_triplet(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {boolean}
    */
    get is_trailing() {
        const ret = wasm.__wbg_get_brickdata_is_trailing(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
    * @param {boolean} arg0
    */
    set is_trailing(arg0) {
        wasm.__wbg_set_brickdata_is_trailing(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {boolean}
    */
    get is_leading() {
        const ret = wasm.__wbg_get_brickdata_is_leading(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
    * @param {boolean} arg0
    */
    set is_leading(arg0) {
        wasm.__wbg_set_brickdata_is_leading(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {boolean}
    */
    get is_hold_note() {
        const ret = wasm.__wbg_get_brickdata_is_hold_note(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
    * @param {boolean} arg0
    */
    set is_hold_note(arg0) {
        wasm.__wbg_set_brickdata_is_hold_note(this.__wbg_ptr, arg0);
    }
    /**
    * @param {BrickType} brick_type
    * @param {number} beat_pos
    * @param {number} end_beat_pos
    * @param {number} x_pos
    * @param {boolean} is_triplet
    * @param {boolean} is_trailing
    * @param {boolean} is_leading
    * @param {boolean} is_hold_note
    * @returns {BrickData}
    */
    static new(brick_type, beat_pos, end_beat_pos, x_pos, is_triplet, is_trailing, is_leading, is_hold_note) {
        const ret = wasm.brickdata_new(brick_type, beat_pos, end_beat_pos, x_pos, is_triplet, is_trailing, is_leading, is_hold_note);
        return BrickData.__wrap(ret);
    }
    /**
    * @param {number} bpm
    * @param {number} brick_speed
    * @returns {number}
    */
    appearance_y(bpm, brick_speed) {
        const ret = wasm.brickdata_appearance_y(this.__wbg_ptr, bpm, brick_speed);
        return ret;
    }
    /**
    * @param {number} bpm
    * @param {number} brick_speed
    * @returns {number}
    */
    end_appearance_y(bpm, brick_speed) {
        const ret = wasm.brickdata_end_appearance_y(this.__wbg_ptr, bpm, brick_speed);
        return ret;
    }
    /**
    * @returns {number}
    */
    x() {
        const ret = wasm.brickdata_x(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} beat_pos
    * @param {number} bpm
    * @returns {number}
    */
    static approx_time(beat_pos, bpm) {
        const ret = wasm.brickdata_approx_time(beat_pos, bpm);
        return ret;
    }
    /**
    * @param {number} time
    * @param {number} bpm
    * @returns {number}
    */
    static closest_beat_pos(time, bpm) {
        const ret = wasm.brickdata_closest_beat_pos(time, bpm);
        return ret;
    }
}

const GameFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_game_free(ptr >>> 0));
/**
*/
export class Game {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Game.prototype);
        obj.__wbg_ptr = ptr;
        GameFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        GameFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_game_free(ptr);
    }
    /**
    * @param {number} bpm
    * @param {number} brick_speed
    * @param {number} duration
    * @returns {Game}
    */
    static new(bpm, brick_speed, duration) {
        const ret = wasm.game_new(bpm, brick_speed, duration);
        return Game.__wrap(ret);
    }
    /**
    * @param {number} seconds_passed
    */
    tick(seconds_passed) {
        wasm.game_tick(this.__wbg_ptr, seconds_passed);
    }
    /**
    * @returns {AudioInstructions}
    */
    audio_instructions() {
        const ret = wasm.game_audio_instructions(this.__wbg_ptr);
        return AudioInstructions.__wrap(ret);
    }
    /**
    * @returns {RenderingInstructions}
    */
    rendering_instructions() {
        const ret = wasm.game_rendering_instructions(this.__wbg_ptr);
        return RenderingInstructions.__wrap(ret);
    }
    /**
    * @returns {GameData}
    */
    game_data() {
        const ret = wasm.game_game_data(this.__wbg_ptr);
        return GameData.__wrap(ret);
    }
    /**
    * @returns {Array<any>}
    */
    bricks() {
        const ret = wasm.game_bricks(this.__wbg_ptr);
        return takeObject(ret);
    }
    /**
    * @param {Input} input
    * @param {number} time_since_tick
    */
    input_command(input, time_since_tick) {
        wasm.game_input_command(this.__wbg_ptr, input, time_since_tick);
    }
    /**
    * @param {Input} input
    * @param {number} time_since_tick
    */
    stop_command(input, time_since_tick) {
        wasm.game_stop_command(this.__wbg_ptr, input, time_since_tick);
    }
    /**
    * @param {BrickData} brick_data
    */
    initial_load_add_brick(brick_data) {
        _assertClass(brick_data, BrickData);
        var ptr0 = brick_data.__destroy_into_raw();
        wasm.game_initial_load_add_brick(this.__wbg_ptr, ptr0);
    }
    /**
    * @param {BrickData} brick_data
    */
    add_brick(brick_data) {
        _assertClass(brick_data, BrickData);
        var ptr0 = brick_data.__destroy_into_raw();
        wasm.game_add_brick(this.__wbg_ptr, ptr0);
    }
    /**
    * @param {number} beat_pos
    * @param {number} x_pos
    * @returns {BrickData | undefined}
    */
    select_brick(beat_pos, x_pos) {
        const ret = wasm.game_select_brick(this.__wbg_ptr, beat_pos, x_pos);
        return ret === 0 ? undefined : BrickData.__wrap(ret);
    }
    /**
    * @param {BrickData} brick_data
    */
    remove_brick(brick_data) {
        _assertClass(brick_data, BrickData);
        var ptr0 = brick_data.__destroy_into_raw();
        wasm.game_remove_brick(this.__wbg_ptr, ptr0);
    }
    /**
    * @param {number} time
    */
    seek(time) {
        wasm.game_seek(this.__wbg_ptr, time);
    }
}

const GameDataFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_gamedata_free(ptr >>> 0));
/**
*/
export class GameData {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(GameData.prototype);
        obj.__wbg_ptr = ptr;
        GameDataFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        GameDataFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_gamedata_free(ptr);
    }
    /**
    * @returns {number}
    */
    get bpm() {
        const ret = wasm.__wbg_get_gamedata_bpm(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set bpm(arg0) {
        wasm.__wbg_set_gamedata_bpm(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get beat_interval() {
        const ret = wasm.__wbg_get_gamedata_beat_interval(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set beat_interval(arg0) {
        wasm.__wbg_set_gamedata_beat_interval(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get brick_speed() {
        const ret = wasm.__wbg_get_gamedata_brick_speed(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set brick_speed(arg0) {
        wasm.__wbg_set_gamedata_brick_speed(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get time_running() {
        const ret = wasm.__wbg_get_gamedata_time_running(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set time_running(arg0) {
        wasm.__wbg_set_gamedata_time_running(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get score() {
        const ret = wasm.__wbg_get_gamedata_score(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set score(arg0) {
        wasm.__wbg_set_gamedata_score(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get max_score() {
        const ret = wasm.__wbg_get_gamedata_max_score(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set max_score(arg0) {
        wasm.__wbg_set_gamedata_max_score(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get duration() {
        const ret = wasm.__wbg_get_gamedata_duration(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set duration(arg0) {
        wasm.__wbg_set_gamedata_duration(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {boolean}
    */
    get is_modified() {
        const ret = wasm.__wbg_get_gamedata_is_modified(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
    * @param {boolean} arg0
    */
    set is_modified(arg0) {
        wasm.__wbg_set_gamedata_is_modified(this.__wbg_ptr, arg0);
    }
}

const GraphicFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_graphic_free(ptr >>> 0));
/**
*/
export class Graphic {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Graphic.prototype);
        obj.__wbg_ptr = ptr;
        GraphicFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        GraphicFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_graphic_free(ptr);
    }
    /**
    * @returns {GraphicGroup}
    */
    get g() {
        const ret = wasm.__wbg_get_graphic_g(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {GraphicGroup} arg0
    */
    set g(arg0) {
        wasm.__wbg_set_graphic_g(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get frame() {
        const ret = wasm.__wbg_get_graphic_frame(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set frame(arg0) {
        wasm.__wbg_set_graphic_frame(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get flags() {
        const ret = wasm.__wbg_get_graphic_flags(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set flags(arg0) {
        wasm.__wbg_set_graphic_flags(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get arg() {
        const ret = wasm.__wbg_get_graphic_arg(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set arg(arg0) {
        wasm.__wbg_set_graphic_arg(this.__wbg_ptr, arg0);
    }
}

const PositionFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_position_free(ptr >>> 0));
/**
*/
export class Position {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Position.prototype);
        obj.__wbg_ptr = ptr;
        PositionFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        PositionFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_position_free(ptr);
    }
    /**
    * @returns {number}
    */
    get x() {
        const ret = wasm.__wbg_get_gamedata_bpm(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set x(arg0) {
        wasm.__wbg_set_gamedata_bpm(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get y() {
        const ret = wasm.__wbg_get_gamedata_beat_interval(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set y(arg0) {
        wasm.__wbg_set_gamedata_beat_interval(this.__wbg_ptr, arg0);
    }
}

const PositionedGraphicFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_positionedgraphic_free(ptr >>> 0));
/**
*/
export class PositionedGraphic {

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        PositionedGraphicFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_positionedgraphic_free(ptr);
    }
    /**
    * @returns {Graphic}
    */
    get g() {
        const ret = wasm.__wbg_get_positionedgraphic_g(this.__wbg_ptr);
        return Graphic.__wrap(ret);
    }
    /**
    * @param {Graphic} arg0
    */
    set g(arg0) {
        _assertClass(arg0, Graphic);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_positionedgraphic_g(this.__wbg_ptr, ptr0);
    }
    /**
    * @returns {number}
    */
    get x() {
        const ret = wasm.__wbg_get_gamedata_beat_interval(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set x(arg0) {
        wasm.__wbg_set_gamedata_beat_interval(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get y() {
        const ret = wasm.__wbg_get_gamedata_brick_speed(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set y(arg0) {
        wasm.__wbg_set_gamedata_brick_speed(this.__wbg_ptr, arg0);
    }
}

const RenderingInstructionsFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_renderinginstructions_free(ptr >>> 0));
/**
*/
export class RenderingInstructions {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(RenderingInstructions.prototype);
        obj.__wbg_ptr = ptr;
        RenderingInstructionsFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        RenderingInstructionsFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_renderinginstructions_free(ptr);
    }
    /**
    * @returns {number}
    */
    get num_graphics() {
        const ret = wasm.__wbg_get_audioinstructions_num_instructions(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set num_graphics(arg0) {
        wasm.__wbg_set_audioinstructions_num_instructions(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get graphics_ptr() {
        const ret = wasm.__wbg_get_audioinstructions_instructions_ptr(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set graphics_ptr(arg0) {
        wasm.__wbg_set_audioinstructions_instructions_ptr(this.__wbg_ptr, arg0);
    }
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbg_brickdata_new = function(arg0) {
        const ret = BrickData.__wrap(arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbg_newwithlength_a20dc3b27e1cb1b2 = function(arg0) {
        const ret = new Array(arg0 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_79c308ecd9a1d091 = function(arg0, arg1, arg2) {
        getObject(arg0)[arg1 >>> 0] = takeObject(arg2);
    };
    imports.wbg.__wbg_new_abda76e883ba8a5f = function() {
        const ret = new Error();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_stack_658279fe44541cf6 = function(arg0, arg1) {
        const ret = getObject(arg1).stack;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len1;
        getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbg_error_f851667af71bcfc6 = function(arg0, arg1) {
        let deferred0_0;
        let deferred0_1;
        try {
            deferred0_0 = arg0;
            deferred0_1 = arg1;
            console.error(getStringFromWasm0(arg0, arg1));
        } finally {
            wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
        }
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };

    return imports;
}

function __wbg_init_memory(imports, maybe_memory) {

}

function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedInt32Memory0 = null;
    cachedUint8Memory0 = null;


    return wasm;
}

function initSync(module) {
    if (wasm !== undefined) return wasm;

    const imports = __wbg_get_imports();

    __wbg_init_memory(imports);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(input) {
    if (wasm !== undefined) return wasm;

    if (typeof input === 'undefined') {
        input = new URL('rhythm_warrior_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    __wbg_init_memory(imports);

    const { instance, module } = await __wbg_load(await input, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync }
export default __wbg_init;
