/* tslint:disable */
/* eslint-disable */
/**
* @returns {number}
*/
export function ground_pos(): number;
/**
* @returns {number}
*/
export function max_notes_per_screen_width(): number;
/**
* @returns {number}
*/
export function time_zero_brick_pos(): number;
/**
* @returns {Position}
*/
export function game_dimensions(): Position;
/**
* @returns {Position}
*/
export function player_dimensions(): Position;
/**
* @returns {Position}
*/
export function brick_dimensions(): Position;
/**
* @returns {number}
*/
export function num_possible_inputs(): number;
/**
* @param {GraphicGroup} g
* @returns {number}
*/
export function max_graphics(g: GraphicGroup): number;
/**
* @param {GraphicGroup} g
* @returns {Position}
*/
export function graphic_size(g: GraphicGroup): Position;
/**
* @returns {number}
*/
export function num_graphic_groups(): number;
/**
*/
export enum GraphicFlags {
  HorizontalFlip = 1,
  VerticalFlip = 2,
  Opacity = 4,
}
/**
*/
export enum Input {
  Dash = 0,
  Slash1 = 1,
  Slash2 = 2,
  Slash3 = 3,
}
/**
*/
export enum BrickType {
  Type1 = 0,
  Type2 = 1,
  Type3 = 2,
}
/**
*/
export enum GraphicGroup {
  Background = 0,
  Standing = 1,
  Walking = 2,
  Running = 3,
  Slashing1 = 4,
  Slashing2 = 5,
  Slashing3 = 6,
  Brick1 = 7,
  Brick2 = 8,
  Brick3 = 9,
  Brick1Segment = 10,
  Brick2Segment = 11,
  Brick3Segment = 12,
  Dash0 = 13,
  Dash1 = 14,
  Dash2 = 15,
  Dash3 = 16,
  PreHolding1 = 17,
  PreHolding2 = 18,
  PreHolding3 = 19,
  Holding1 = 20,
  Holding2 = 21,
  Holding3 = 22,
  Hold1 = 23,
  Hold2 = 24,
  Hold3 = 25,
}
/**
*/
export class BrickData {
  free(): void;
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
  static new(brick_type: BrickType, beat_pos: number, end_beat_pos: number, x_pos: number, is_triplet: boolean, is_trailing: boolean, is_leading: boolean, is_hold_note: boolean): BrickData;
/**
* @param {number} bpm
* @param {number} brick_speed
* @returns {number}
*/
  appearance_y(bpm: number, brick_speed: number): number;
/**
* @param {number} bpm
* @param {number} brick_speed
* @returns {number}
*/
  end_appearance_y(bpm: number, brick_speed: number): number;
/**
* @returns {number}
*/
  x(): number;
/**
* @param {number} beat_pos
* @param {number} bpm
* @returns {number}
*/
  static approx_time(beat_pos: number, bpm: number): number;
/**
* @param {number} time
* @param {number} bpm
* @returns {number}
*/
  static closest_beat_pos(time: number, bpm: number): number;
/**
*/
  beat_pos: number;
/**
*/
  brick_type: BrickType;
/**
*/
  end_beat_pos: number;
/**
*/
  is_hold_note: boolean;
/**
*/
  is_leading: boolean;
/**
*/
  is_trailing: boolean;
/**
*/
  is_triplet: boolean;
/**
*/
  x_pos: number;
}
/**
*/
export class Game {
  free(): void;
/**
* @param {number} bpm
* @param {number} brick_speed
* @param {number} duration
* @returns {Game}
*/
  static new(bpm: number, brick_speed: number, duration: number): Game;
/**
* @param {number} seconds_passed
*/
  tick(seconds_passed: number): void;
/**
* @returns {RenderingInstructions}
*/
  rendering_instructions(): RenderingInstructions;
/**
* @returns {number}
*/
  bricks_broken(): number;
/**
* @returns {GameData}
*/
  game_data(): GameData;
/**
* @returns {Array<any>}
*/
  bricks(): Array<any>;
/**
* @param {Input} input
* @param {number} time_since_tick
*/
  input_command(input: Input, time_since_tick: number): void;
/**
* @param {Input} input
*/
  stop_command(input: Input): void;
/**
* @param {number} beat_pos
* @param {number} x_pos
* @returns {BrickData | undefined}
*/
  select_brick(beat_pos: number, x_pos: number): BrickData | undefined;
/**
* @param {BrickData} brick_data
*/
  add_brick(brick_data: BrickData): void;
/**
* @param {BrickData} brick_data
*/
  remove_brick(brick_data: BrickData): void;
/**
* @param {number} time
*/
  seek(time: number): void;
}
/**
*/
export class GameData {
  free(): void;
/**
*/
  beat_interval: number;
/**
*/
  bpm: number;
/**
*/
  brick_speed: number;
/**
*/
  duration: number;
/**
*/
  max_score: number;
/**
*/
  score: number;
/**
*/
  time_running: number;
}
/**
*/
export class Graphic {
  free(): void;
/**
*/
  arg: number;
/**
*/
  flags: number;
/**
*/
  frame: number;
/**
*/
  g: GraphicGroup;
}
/**
*/
export class Position {
  free(): void;
/**
*/
  x: number;
/**
*/
  y: number;
}
/**
*/
export class PositionedGraphic {
  free(): void;
/**
*/
  g: Graphic;
/**
*/
  x: number;
/**
*/
  y: number;
}
/**
*/
export class RenderingInstructions {
  free(): void;
/**
*/
  graphics_ptr: number;
/**
*/
  num_graphics: number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_game_free: (a: number) => void;
  readonly game_new: (a: number, b: number, c: number) => number;
  readonly game_tick: (a: number, b: number) => void;
  readonly game_rendering_instructions: (a: number) => number;
  readonly game_bricks_broken: (a: number) => number;
  readonly game_game_data: (a: number) => number;
  readonly game_bricks: (a: number) => number;
  readonly game_input_command: (a: number, b: number, c: number) => void;
  readonly game_stop_command: (a: number, b: number) => void;
  readonly game_select_brick: (a: number, b: number, c: number) => number;
  readonly game_add_brick: (a: number, b: number) => void;
  readonly game_remove_brick: (a: number, b: number) => void;
  readonly game_seek: (a: number, b: number) => void;
  readonly __wbg_gamedata_free: (a: number) => void;
  readonly __wbg_get_gamedata_bpm: (a: number) => number;
  readonly __wbg_set_gamedata_bpm: (a: number, b: number) => void;
  readonly __wbg_get_gamedata_beat_interval: (a: number) => number;
  readonly __wbg_set_gamedata_beat_interval: (a: number, b: number) => void;
  readonly __wbg_get_gamedata_brick_speed: (a: number) => number;
  readonly __wbg_set_gamedata_brick_speed: (a: number, b: number) => void;
  readonly __wbg_get_gamedata_time_running: (a: number) => number;
  readonly __wbg_set_gamedata_time_running: (a: number, b: number) => void;
  readonly __wbg_get_gamedata_score: (a: number) => number;
  readonly __wbg_set_gamedata_score: (a: number, b: number) => void;
  readonly __wbg_get_gamedata_max_score: (a: number) => number;
  readonly __wbg_set_gamedata_max_score: (a: number, b: number) => void;
  readonly __wbg_get_gamedata_duration: (a: number) => number;
  readonly __wbg_set_gamedata_duration: (a: number, b: number) => void;
  readonly __wbg_brickdata_free: (a: number) => void;
  readonly __wbg_get_brickdata_brick_type: (a: number) => number;
  readonly __wbg_set_brickdata_brick_type: (a: number, b: number) => void;
  readonly __wbg_get_brickdata_beat_pos: (a: number) => number;
  readonly __wbg_set_brickdata_beat_pos: (a: number, b: number) => void;
  readonly __wbg_get_brickdata_end_beat_pos: (a: number) => number;
  readonly __wbg_set_brickdata_end_beat_pos: (a: number, b: number) => void;
  readonly __wbg_get_brickdata_x_pos: (a: number) => number;
  readonly __wbg_set_brickdata_x_pos: (a: number, b: number) => void;
  readonly __wbg_get_brickdata_is_triplet: (a: number) => number;
  readonly __wbg_set_brickdata_is_triplet: (a: number, b: number) => void;
  readonly __wbg_get_brickdata_is_trailing: (a: number) => number;
  readonly __wbg_set_brickdata_is_trailing: (a: number, b: number) => void;
  readonly __wbg_get_brickdata_is_leading: (a: number) => number;
  readonly __wbg_set_brickdata_is_leading: (a: number, b: number) => void;
  readonly __wbg_get_brickdata_is_hold_note: (a: number) => number;
  readonly __wbg_set_brickdata_is_hold_note: (a: number, b: number) => void;
  readonly __wbg_graphic_free: (a: number) => void;
  readonly __wbg_get_graphic_g: (a: number) => number;
  readonly __wbg_set_graphic_g: (a: number, b: number) => void;
  readonly __wbg_get_graphic_frame: (a: number) => number;
  readonly __wbg_set_graphic_frame: (a: number, b: number) => void;
  readonly __wbg_get_graphic_flags: (a: number) => number;
  readonly __wbg_set_graphic_flags: (a: number, b: number) => void;
  readonly __wbg_get_graphic_arg: (a: number) => number;
  readonly __wbg_set_graphic_arg: (a: number, b: number) => void;
  readonly __wbg_renderinginstructions_free: (a: number) => void;
  readonly __wbg_get_renderinginstructions_num_graphics: (a: number) => number;
  readonly __wbg_get_renderinginstructions_graphics_ptr: (a: number) => number;
  readonly __wbg_set_renderinginstructions_graphics_ptr: (a: number, b: number) => void;
  readonly __wbg_positionedgraphic_free: (a: number) => void;
  readonly __wbg_get_positionedgraphic_g: (a: number) => number;
  readonly __wbg_set_positionedgraphic_g: (a: number, b: number) => void;
  readonly __wbg_position_free: (a: number) => void;
  readonly ground_pos: () => number;
  readonly max_notes_per_screen_width: () => number;
  readonly time_zero_brick_pos: () => number;
  readonly game_dimensions: () => number;
  readonly player_dimensions: () => number;
  readonly brick_dimensions: () => number;
  readonly num_possible_inputs: () => number;
  readonly brickdata_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => number;
  readonly brickdata_appearance_y: (a: number, b: number, c: number) => number;
  readonly brickdata_end_appearance_y: (a: number, b: number, c: number) => number;
  readonly brickdata_x: (a: number) => number;
  readonly brickdata_approx_time: (a: number, b: number) => number;
  readonly brickdata_closest_beat_pos: (a: number, b: number) => number;
  readonly __wbg_get_positionedgraphic_x: (a: number) => number;
  readonly __wbg_get_positionedgraphic_y: (a: number) => number;
  readonly __wbg_get_position_x: (a: number) => number;
  readonly __wbg_get_position_y: (a: number) => number;
  readonly __wbg_set_renderinginstructions_num_graphics: (a: number, b: number) => void;
  readonly __wbg_set_positionedgraphic_x: (a: number, b: number) => void;
  readonly __wbg_set_positionedgraphic_y: (a: number, b: number) => void;
  readonly __wbg_set_position_x: (a: number, b: number) => void;
  readonly __wbg_set_position_y: (a: number, b: number) => void;
  readonly max_graphics: (a: number) => number;
  readonly graphic_size: (a: number) => number;
  readonly num_graphic_groups: () => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
