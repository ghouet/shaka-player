/*! @license
 * Shaka Player
 * Copyright 2016 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

describe('MimeUtils', () => {
  const getNormalizedCodec = (codecs) =>
    shaka.util.MimeUtils.getNormalizedCodec(codecs);

  it('normalizes codecs', () => {
    expect(getNormalizedCodec('mp4a.66')).toBe('mpeg2_aac');
    expect(getNormalizedCodec('mp4a.67')).toBe('mpeg2_aac');
    expect(getNormalizedCodec('mp4a.68')).toBe('mpeg2_aac');

    expect(getNormalizedCodec('mp3')).toBe('mp3');
    expect(getNormalizedCodec('mp4a.69')).toBe('mp3');
    expect(getNormalizedCodec('mp4a.6B')).toBe('mp3');
    expect(getNormalizedCodec('mp4a.6b')).toBe('mp3');

    expect(getNormalizedCodec('mp4a.40.2')).toBe('mpeg4_aac');
    expect(getNormalizedCodec('mp4a.40.02')).toBe('mpeg4_aac');
    expect(getNormalizedCodec('mp4a.40.5')).toBe('mpeg4_aac');
    expect(getNormalizedCodec('mp4a.40.05')).toBe('mpeg4_aac');
    expect(getNormalizedCodec('mp4a.40.29')).toBe('mpeg4_aac');

    expect(getNormalizedCodec('mp4a.40.42')).toBe('mpeg4_xhe_aac');

    expect(getNormalizedCodec('ac-3')).toBe('ac-3');
    expect(getNormalizedCodec('mp4a.a5')).toBe('ac-3');
    expect(getNormalizedCodec('mp4a.A5')).toBe('ac-3');

    expect(getNormalizedCodec('ec-3')).toBe('ec-3');
    expect(getNormalizedCodec('mp4a.a6')).toBe('ec-3');
    expect(getNormalizedCodec('mp4a.A6')).toBe('ec-3');

    expect(getNormalizedCodec('vp8')).toBe('vp8');
    expect(getNormalizedCodec('vp8.0')).toBe('vp8');

    expect(getNormalizedCodec('dtsc')).toBe('dtsc');
    expect(getNormalizedCodec('mp4a.a9')).toBe('dtsc');

    expect(getNormalizedCodec('dtsx')).toBe('dtsx');
    expect(getNormalizedCodec('mp4a.b2')).toBe('dtsx');

    expect(getNormalizedCodec('avc1')).toBe('avc');
    expect(getNormalizedCodec('avc3')).toBe('avc');

    expect(getNormalizedCodec('hvc1')).toBe('hevc');
    expect(getNormalizedCodec('hev1')).toBe('hevc');

    expect(getNormalizedCodec('dvh1.05')).toBe('dovi');
    expect(getNormalizedCodec('dvhe.05')).toBe('dovi');
  });
});
