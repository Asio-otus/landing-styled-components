# Landing page using react and styled components.

This is landing page project from youtube tutorial on react with styled-components with my modifications.
[The link to the youtube tutorial with the original landing](https://www.youtube.com/watch?v=Nl54MJDR2p8&t=2439s&ab_channel=BrianDesign)

## What I didn't like in the original project. That have to be fixed.

1. The original tutorial didn't have global styles and variables. Which I think is not a good practice even on a small project.
2. I personaly didn't like that the component and the styles for this specific component are in different files. The reason is that this kind of architecture strategy creates confusion in imports and component naming.
3. No shared components. I don't think I have to explain this one.
4. The mobile menu does not close automaticly when you switch to desktop view. This is clearly a bad thing. I will try to find some sort of react why of doing 'on resize', may be with custom hooks.
5. code duplication: 
    - the links in the navbar and sidebar are hardcoded. Need to create some sort of bll to include all the info.

