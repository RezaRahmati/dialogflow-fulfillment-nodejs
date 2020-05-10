/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const {
  RichResponse,
  PLATFORMS,
} = require('./rich-response');

/**
 * Class representing a telephony transfer call response
 * @extends RichResponse
 */
class TelephonySynthesizeSpeech extends RichResponse {
  /**
   * Constructor for TelephonySynthesizeSpeech object
  *
   *
   * @param {string} text string indicating target text to transfer To
   */
  constructor(text, ssml) {
    super();
    if (text == null && ssml == null) {
      throw new Error(
        'text or ssml required by TelephonySynthesizeSpeech constructor'
      );
    }

    if (text != null && ssml != null) {
      throw new Error(
        'either text or ssml should be provided to TelephonySynthesizeSpeech constructor'
      );
    }

    if (text != null && typeof text === 'string') {
      this.text = text;
    }

    if (ssml != null && typeof ssml === 'string') {
      this.text = ssml;
    }

  }

  /**
   * Get the the response object of the telephony transfer
   *
   * @private
   */
  getV1ResponseObject_(platform) {
    throw new Error('Telephony num supported in V1');
  }

  /**
   * Get the the response object of the telephony transfer
   *
   * @return {Object?} message telephony transfer
   * @private
   */
  getV2ResponseObject_(platform) {
    if (this.platform && this.platform !== platform) {
      // if it is and is not for the specific platform return null
      return null;
    }

    return {
      telephonySynthesizeSpeech: {
        text: this.text,
        ssml: this.ssml,
        source: this.text != null ? 'text' : 'ssml'
      },
      platform: PLATFORMS.TELEPHONY,
    };
  }
}

module.exports = TelephonySynthesizeSpeech;
