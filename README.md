# Commit input type

[build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test] [type-enum]

# Hieararchy

```coffeescript

Dummy versi 1 - maybe deprecated


application:
user
-> team
  -> proj 1
    -> board 1
      -> col 1 (ex. todo)
        -> card 1 (ex. issue card ASL-001)
          -> field 1 (ex. field title)
          -> field 2 (ex. field description)
          -> field 3 (ex. field story point)
          -> field 4 (ex. field type [bug, story, task, etc.])
          -> field 5 (ex. field assignee)
          -> field n (ex. field reporter)
        -> card 2 (ex. issue card ASL-002)
          -> ...
        -> card n (ex. issue card ASL-003)
          -> ...
      -> col 2 (ex. ongoing)
        -> ...
          -> ...
      -> col n (ex. done)
        -> ...
          -> ...
    -> board 2
      -> ...
        -> ...
          -> ...
    -> board n
      -> ...
        -> ...
          -> ...
  -> proj n
    -> board 1
    -> board 2
    -> board n
```
