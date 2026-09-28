package migrations

import (
	"github.com/pocketbase/pocketbase/core"
)

func init() {
	core.SystemMigrations.Register(func(txApp core.App) error {
		_, err := txApp.DB().NewQuery(`ALTER TABLE {{_collections}} ADD COLUMN [[label]] TEXT DEFAULT "" NOT NULL;`).Execute()
		if err != nil {
			// column may already exist
			return nil
		}
		return nil
	}, nil)
}
