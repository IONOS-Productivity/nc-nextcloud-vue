/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { getLoggerBuilder } from '@nextcloud/logger'

export default getLoggerBuilder()
	.detectUser()
	.setApp('@nextcloud/vue')
	.build()
