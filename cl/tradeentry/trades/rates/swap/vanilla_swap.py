# Copyright (C) 2023-present The Project Contributors
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from dataclasses import dataclass
from cl.tradeentry.formats.rates.fixed_rate_key import FixedRateKey
from cl.tradeentry.formats.rates.swap_index_key import SwapIndexKey
from cl.tradeentry.formats.rates.pay_receive_fixed_key import PayReceiveFixedKey
from cl.tradeentry.formats.schedule.effective_date_key import EffectiveDateKey
from cl.tradeentry.formats.schedule.maturity_date_key import MaturityDateKey
from cl.tradeentry.trades.trade import Trade


@dataclass(slots=True, kw_only=True)
class VanillaSwap(Trade):
    """Vanilla fixed for floating swap."""

    pay_receive_fixed: PayReceiveFixedKey | None = None
    """String representation of the PayFixed or ReceiveFixed flag in the format specified by the user."""

    effective_date: EffectiveDateKey | None = None
    """Trade or leg effective date defined as unadjusted date or time interval relative to another date."""

    maturity_date: MaturityDateKey | None = None
    """Trade or leg maturity date defined as unadjusted date or time interval relative to another date."""

    float_index: SwapIndexKey | None = None
    """Swap interest rate index or currency (in case of currency, default index for the currency is used)."""

    fixed_rate: FixedRateKey | None = None
    """Fixed rate (breakeven rate is assumed if not specified)."""