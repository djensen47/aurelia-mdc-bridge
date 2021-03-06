export declare class ConfigBuilder {
    globalResources: any[];
    useGlobalResources: boolean;
    useAll(): ConfigBuilder;
    useButtons(): ConfigBuilder;
    useFab(): ConfigBuilder;
    useIconToggle(): ConfigBuilder;
    useCards(): ConfigBuilder;
    useDialogs(): ConfigBuilder;
    usePermanentDrawer(): ConfigBuilder;
    usePersistentDrawer(): ConfigBuilder;
    useTemporaryDrawer(): ConfigBuilder;
    useGridLists(): ConfigBuilder;
    useCheckboxes(): ConfigBuilder;
    useRadioButtons(): ConfigBuilder;
    useSelectMenus(): ConfigBuilder;
    useSelectMenusCss(): ConfigBuilder;
    useSliders(): ConfigBuilder;
    useSwitches(): ConfigBuilder;
    useTextFields(): ConfigBuilder;
    useLayoutGrids(): ConfigBuilder;
    useLinearProgress(): ConfigBuilder;
    useLists(): ConfigBuilder;
    useMenus(): ConfigBuilder;
    useRipples(): ConfigBuilder;
    useSnackbars(): ConfigBuilder;
    useTabs(): ConfigBuilder;
    useToolbars(): ConfigBuilder;
    withoutGlobalResources(): ConfigBuilder;
    private addDrawerAddons();
}
