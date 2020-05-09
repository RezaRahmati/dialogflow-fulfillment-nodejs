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
  V2_TO_V1_PLATFORM_NAME,
} = require('./rich-response');

/**
 * Class representing a telephony transfer call response
 * @extends RichResponse
 */
class TelephonyTransferCall extends RichResponse {
  /**
   * Constructor for TelephonyTransferCall object
  *
   *
   * @param {string} phoneNumber string indicating target phoneNumber to transfer To
   */
  constructor(phoneNumber) {
    super();
    if (phoneNumber == null) {
      throw new Error(
        'string required by TelephonyTransferCall constructor'
      );
    }

    if (typeof phoneNumber === 'string') {
      this.phoneNumber = phoneNumber;
    }
  }

  /**
   * Set the phone number
   *
   * @param {string} phoneNumber
   * @return {phoneNumber}
   */
  setPhoneNumber(phoneNumber) {
    this.phoneNumber = phoneNumber;
    return this;
  }

  /**
   * Get the the response object of the telephony transfer
   *
   * @return {Object?} message telephony transfer
   * @private
   */
  getV1ResponseObject_() {
    throw new Error('Telephony num supported in V1')
  }

  /**
   * Get the the response object of the telephony transfer
   *
   * @return {Object?} message telephony transfer
   * @private
   */
  getV2ResponseObject_() {


    return {
      telephonyTransferCall: {
        phoneNumber: this.phoneNumber
      },
      platform: 'TELEPHONY',
    };
  }
}

module.exports = TelephonyTransferCall;
