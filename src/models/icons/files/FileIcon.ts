import { IconPack } from '../index';

export interface FileIcon {
    /**
     * Name of the icon, e.g. 'javascript'
     */
    name: string;

    /**
     * Define the file extensions that should use this icon.
     * E.g. ['js']
     */
    fileExtensions?: string[];

    /**
     * Define if there are some static file names that should apply this icon.
     * E.g. ['sample.js']
     */
    fileNames?: string[];

    /**
     * Define if there is a light icon available.
     */
    light?: boolean;

    /**
     * Define if there is a high contrast icon available.
     */
    highContrast?: boolean;

    /**
     * Define if the icon should be disabled.
     */
    disabled?: boolean;

    /**
     * Defines a pack to which this icon belongs. A pack can be toggled and all icons inside this pack can be enabled or disabled together.
     */
    pack?: IconPack;
}
