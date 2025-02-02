import type { MessageQueue } from "@lauf/queue";
import type { Immutable } from "@lauf/store";

/** Function to process a queue of values including an initial starting value, leading to
 * a final `Ending` result.
 */
export type QueueHandler<Selected, Ending> = (
  valueQueue: MessageQueue<Selected>,
  initialValue: Selected
) => Promise<Ending>;

/** A function to notify a series of changing values from a store. */
export type Follower<Selected, Ending> = (
  selected: Immutable<Selected>,
  controlHandle: Controls<Selected, Ending>
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
) => Promise<void | ExitStatus>;

/** A control object for a {@link Follower} function to signal
 * exit behaviour, retrieve references.
 */
export interface Controls<Selected, Ending> {
  lastSelected: () => Immutable<Selected> | undefined;
  exit: (ending: Ending) => ExitStatus;
}

/** A type used as a special return value. */
export type ExitStatus = ["exit"];
