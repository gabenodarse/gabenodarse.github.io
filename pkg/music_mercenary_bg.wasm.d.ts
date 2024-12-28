/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function __wbg_game_free(a: number): void;
export function game_new(a: number, b: number, c: number): number;
export function game_tick(a: number, b: number): void;
export function game_audio_instructions(a: number): number;
export function game_rendering_instructions(a: number): number;
export function game_game_data(a: number): number;
export function game_bricks(a: number): number;
export function game_input_command(a: number, b: number, c: number): void;
export function game_stop_command(a: number, b: number): void;
export function game_initial_load_add_brick(a: number, b: number): void;
export function game_add_brick(a: number, b: number): void;
export function game_select_brick(a: number, b: number, c: number): number;
export function game_remove_brick(a: number, b: number): void;
export function game_seek(a: number, b: number): void;
export function __wbg_gamedata_free(a: number): void;
export function __wbg_get_gamedata_bpm(a: number): number;
export function __wbg_set_gamedata_bpm(a: number, b: number): void;
export function __wbg_get_gamedata_beat_interval(a: number): number;
export function __wbg_set_gamedata_beat_interval(a: number, b: number): void;
export function __wbg_get_gamedata_brick_speed(a: number): number;
export function __wbg_set_gamedata_brick_speed(a: number, b: number): void;
export function __wbg_get_gamedata_time_running(a: number): number;
export function __wbg_set_gamedata_time_running(a: number, b: number): void;
export function __wbg_get_gamedata_score(a: number): number;
export function __wbg_set_gamedata_score(a: number, b: number): void;
export function __wbg_get_gamedata_max_score(a: number): number;
export function __wbg_set_gamedata_max_score(a: number, b: number): void;
export function __wbg_get_gamedata_duration(a: number): number;
export function __wbg_set_gamedata_duration(a: number, b: number): void;
export function __wbg_get_gamedata_is_modified(a: number): number;
export function __wbg_set_gamedata_is_modified(a: number, b: number): void;
export function __wbg_brickdata_free(a: number): void;
export function __wbg_get_brickdata_brick_type(a: number): number;
export function __wbg_set_brickdata_brick_type(a: number, b: number): void;
export function __wbg_get_brickdata_beat_pos(a: number): number;
export function __wbg_get_brickdata_end_beat_pos(a: number): number;
export function __wbg_set_brickdata_end_beat_pos(a: number, b: number): void;
export function __wbg_get_brickdata_x_pos(a: number): number;
export function __wbg_set_brickdata_x_pos(a: number, b: number): void;
export function __wbg_get_brickdata_is_triplet(a: number): number;
export function __wbg_set_brickdata_is_triplet(a: number, b: number): void;
export function __wbg_get_brickdata_is_trailing(a: number): number;
export function __wbg_set_brickdata_is_trailing(a: number, b: number): void;
export function __wbg_get_brickdata_is_leading(a: number): number;
export function __wbg_set_brickdata_is_leading(a: number, b: number): void;
export function __wbg_get_brickdata_is_hold_note(a: number): number;
export function __wbg_set_brickdata_is_hold_note(a: number, b: number): void;
export function __wbg_graphic_free(a: number): void;
export function __wbg_get_graphic_g(a: number): number;
export function __wbg_set_graphic_g(a: number, b: number): void;
export function __wbg_get_graphic_frame(a: number): number;
export function __wbg_set_graphic_frame(a: number, b: number): void;
export function __wbg_get_graphic_flags(a: number): number;
export function __wbg_set_graphic_flags(a: number, b: number): void;
export function __wbg_get_graphic_arg(a: number): number;
export function __wbg_set_graphic_arg(a: number, b: number): void;
export function __wbg_audioinstructions_free(a: number): void;
export function __wbg_get_audioinstructions_num_instructions(a: number): number;
export function __wbg_set_audioinstructions_num_instructions(a: number, b: number): void;
export function __wbg_get_audioinstructions_instructions_ptr(a: number): number;
export function __wbg_set_audioinstructions_instructions_ptr(a: number, b: number): void;
export function __wbg_positionedgraphic_free(a: number): void;
export function __wbg_get_positionedgraphic_g(a: number): number;
export function __wbg_set_positionedgraphic_g(a: number, b: number): void;
export function __wbg_position_free(a: number): void;
export function ground_pos(): number;
export function max_notes_per_screen_width(): number;
export function time_zero_brick_pos(): number;
export function game_dimensions(): number;
export function player_dimensions(): number;
export function brick_dimensions(): number;
export function num_possible_inputs(): number;
export function brickdata_new(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number): number;
export function brickdata_appearance_y(a: number, b: number, c: number): number;
export function brickdata_end_appearance_y(a: number, b: number, c: number): number;
export function brickdata_x(a: number): number;
export function brickdata_approx_time(a: number, b: number): number;
export function brickdata_closest_beat_pos(a: number, b: number): number;
export function __wbg_get_positionedgraphic_x(a: number): number;
export function __wbg_get_positionedgraphic_y(a: number): number;
export function __wbg_get_position_x(a: number): number;
export function __wbg_get_position_y(a: number): number;
export function __wbg_set_renderinginstructions_num_graphics(a: number, b: number): void;
export function __wbg_set_brickdata_beat_pos(a: number, b: number): void;
export function __wbg_set_positionedgraphic_x(a: number, b: number): void;
export function __wbg_set_positionedgraphic_y(a: number, b: number): void;
export function __wbg_set_position_x(a: number, b: number): void;
export function __wbg_set_position_y(a: number, b: number): void;
export function __wbg_renderinginstructions_free(a: number): void;
export function __wbg_get_renderinginstructions_num_graphics(a: number): number;
export function __wbg_get_renderinginstructions_graphics_ptr(a: number): number;
export function __wbg_set_renderinginstructions_graphics_ptr(a: number, b: number): void;
export function max_graphics(a: number): number;
export function graphic_size(a: number): number;
export function num_graphic_groups(): number;
export function __wbindgen_free(a: number, b: number, c: number): void;
export function __wbindgen_malloc(a: number, b: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number, d: number): number;
