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
from cl.runtime.settings.settings import Settings


@dataclass(slots=True, kw_only=True)
class GoogleSettings(Settings):
    """Google Gemini settings."""

    api_key: str | None = None
    """The key for making REST API calls, ensure this key is stored in .secrets.yaml rather than settings.yaml."""

    def init(self) -> None:
        """Same as __init__ but can be used when field values are set both during and after construction."""

        if self.api_key is not None and not isinstance(self.api_key, str):
            raise RuntimeError(f"{type(self).__name__} field 'api_key' must be a string.")

    @classmethod
    def get_prefix(cls) -> str:
        return "google"