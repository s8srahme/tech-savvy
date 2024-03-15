/**
 * W R A P P I N G  C O M P O N E N T S
 *
 * You may need to wrap a MUI component in order to enhance it. If you do, you should forward the props as the parent
 * component may need to control the wrapped component props.
 *
 *
 * C U S T O M  P R O P S
 *
 * To add styles based on custom props (non-mui props), you could initiate a new prop with union type to your custom
 * component and pass it to the corresponding MUI component className prop. Then map each type to different styles
 * using CSS class selectors.
 */

import { Avatar } from "./Avatar/Avatar";
import type { AvatarProps, AvatarSize } from "./Avatar/Avatar.types";
import { Icon } from "./Icon/Icon";
import type { IconProps } from "./Icon/Icon.types";
import { ImageMedia } from "./ImageMedia/ImageMedia";
import type { ImageMediaProps } from "./ImageMedia/ImageMedia.types";
import { Typography } from "./Typography/Typography";
import type { TypographyProps } from "./Typography/Typography.types";

/*  T Y P E S  */

export type { ImageMediaProps, AvatarProps, AvatarSize, IconProps, TypographyProps };

/*  C O M P O N E N T S  */

export { ImageMedia, Avatar, Icon, Typography };
